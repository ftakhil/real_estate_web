import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import CustomCursor from "./components/CustomCursor";
import LoadingScreen from "./components/LoadingScreen";
import ScrollToTop from "./components/ScrollToTop";
import AnimatedRoutes from "./components/AnimatedRoutes";
import Layout from "./components/Layout";

const queryClient = new QueryClient();

const App = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Reset loading state on page load/refresh
        setIsLoading(true);
        // Add a small delay to ensure loading screen shows
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <QueryClientProvider client={queryClient}>
            <TooltipProvider>
                <BrowserRouter>
                    <ScrollToTop />
                    {isLoading ? (
                        <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
                    ) : (
                        <>
                            <CustomCursor />
                            <Toaster />
                            <Sonner />
                            <Layout>
                                <AnimatedRoutes />
                            </Layout>
                        </>
                    )}
                </BrowserRouter>
            </TooltipProvider>
        </QueryClientProvider>
    );
};

export default App;
