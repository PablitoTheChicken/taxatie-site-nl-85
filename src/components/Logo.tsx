import { useState, useEffect } from "react";
import { removeBackground, loadImageFromUrl } from "@/lib/backgroundRemoval";
import { Link } from "react-router-dom";

const Logo = () => {
  const [processedLogoUrl, setProcessedLogoUrl] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const processLogo = async () => {
      try {
        setIsProcessing(true);
        setProcessedLogoUrl('/lovable-uploads/7ebb63a0-23be-4ed4-85ff-c96f9b16d69b.png');
        
        // // Load the original logo
        // const logoImage = await loadImageFromUrl('/lovable-uploads/7ebb63a0-23be-4ed4-85ff-c96f9b16d69b.png');
        
        // // Remove background
        // const processedBlob = await removeBackground(logoImage);
        
        // // Create URL for processed image
        // const processedUrl = URL.createObjectURL(processedBlob);
        // setProcessedLogoUrl(processedUrl);
        
      } catch (err) {
        console.error('Error processing logo:', err);
        setError('Failed to process logo');
        // Fallback to original logo
        setProcessedLogoUrl('/lovable-uploads/7ebb63a0-23be-4ed4-85ff-c96f9b16d69b.png');
      } finally {
        setIsProcessing(false);
      }
    };

    processLogo();

    // Cleanup function
    return () => {
      if (processedLogoUrl) {
        URL.revokeObjectURL(processedLogoUrl);
      }
    };
  }, []);

  if (isProcessing) {
    return (
      <Link to="/" className="flex-shrink-0 flex items-center">
        <div className="w-32 h-12 bg-muted rounded-md flex items-center justify-center animate-pulse">
          <span className="text-xs text-muted-foreground">Loading...</span>
        </div>
      </Link>
    );
  }

  if (error && !processedLogoUrl) {
    return (
      <Link to="/" className="flex-shrink-0 flex items-center">
        <div className="w-32 h-12 bg-muted rounded-md flex items-center justify-center">
          <span className="text-xs text-muted-foreground">TK Taxaties</span>
        </div>
      </Link>
    );
  }

  return (
    <Link to="/" className="flex-shrink-0 flex items-center">
      <img 
        src={processedLogoUrl || '/lovable-uploads/7ebb63a0-23be-4ed4-85ff-c96f9b16d69b.png'}
        alt="TK Taxaties Logo" 
        className="h-12 w-auto object-contain"
        style={{ maxWidth: '140px' }}
      />
    </Link>
  );
};

export default Logo;