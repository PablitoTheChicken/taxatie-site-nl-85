import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactFormRequest {
  name: string;
  email: string;
  phone?: string;
  serviceType: string;
  address?: string;
  message?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, serviceType, address, message }: ContactFormRequest = await req.json();

    console.log("Processing contact form submission:", { name, email, serviceType });

    // Send confirmation email to customer
    const customerEmailResponse = await resend.emails.send({
      from: "TaxatiePro <onboarding@resend.dev>",
      to: [email],
      subject: "Bevestiging van uw taxatie-aanvraag",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Bedankt voor uw aanvraag, ${name}!</h2>
          <p>Wij hebben uw aanvraag voor een ${serviceType.toLowerCase()} ontvangen.</p>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #333;">Uw gegevens:</h3>
            <p><strong>Naam:</strong> ${name}</p>
            <p><strong>E-mail:</strong> ${email}</p>
            ${phone ? `<p><strong>Telefoon:</strong> ${phone}</p>` : ''}
            <p><strong>Type taxatie:</strong> ${serviceType}</p>
            ${address ? `<p><strong>Adres:</strong> ${address}</p>` : ''}
            ${message ? `<p><strong>Aanvullende informatie:</strong> ${message}</p>` : ''}
          </div>
          
          <h3 style="color: #333;">Wat gebeurt er nu?</h3>
          <ul style="color: #666;">
            <li>Wij nemen binnen 24 uur contact met u op</li>
            <li>Alle ins en outs worden met u besproken</li>
            <li>Bij akkoord plannen wij de inspectie</li>
            <li>Een digitaal taxatie-dossier (taXapi) wordt voor u aangemaakt</li>
            <li>Binnen 5 werkdagen ontvangt u het digitale rapport</li>
          </ul>
          
          <p style="margin-top: 30px; color: #666;">
            Met vriendelijke groet,<br>
            Tom Kleiberg<br>
            TaxatiePro<br>
            <strong>Telefoon:</strong> +31 (0)6 2256 4249<br>
            <strong>E-mail:</strong> tomkleiberg@gmail.com
          </p>
        </div>
      `,
    });

    // Send notification email to business owner
    const businessEmailResponse = await resend.emails.send({
      from: "TaxatiePro <onboarding@resend.dev>",
      to: ["tomkleiberg@gmail.com"],
      subject: `Nieuwe taxatie-aanvraag van ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Nieuwe taxatie-aanvraag</h2>
          <p>Er is een nieuwe aanvraag binnengekomen via de website.</p>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #333;">Klantgegevens:</h3>
            <p><strong>Naam:</strong> ${name}</p>
            <p><strong>E-mail:</strong> ${email}</p>
            ${phone ? `<p><strong>Telefoon:</strong> ${phone}</p>` : ''}
            <p><strong>Type taxatie:</strong> ${serviceType}</p>
            ${address ? `<p><strong>Adres:</strong> ${address}</p>` : ''}
            ${message ? `<p><strong>Aanvullende informatie:</strong> ${message}</p>` : ''}
          </div>
          
          <p style="color: #666;">Zorg ervoor dat je binnen 24 uur contact opneemt met de klant.</p>
        </div>
      `,
    });

    console.log("Emails sent successfully:", { customerEmailResponse, businessEmailResponse });

    return new Response(JSON.stringify({ 
      success: true, 
      message: "Contact form submitted successfully" 
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ 
        error: error.message,
        success: false 
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);