import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import CustomCursor from "./components/CustomCursor";
import Preloader from "./components/Preloader";
import ScrollToTop from "./components/ScrollToTop";
import AnimatedRoutes from "./components/AnimatedRoutes";
import Layout from "./components/Layout";

const queryClient = new QueryClient();

const App = () => {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <QueryClientProvider client={queryClient}>
            <TooltipProvider>
                <BrowserRouter>
                    <ScrollToTop />
                    <CustomCursor />
                    <Toaster />
                    <Sonner />

                    <AnimatePresence mode="wait">
                        {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
                    </AnimatePresence>

                    <Layout>
                        <AnimatedRoutes />
                    </Layout>
                </BrowserRouter>
            </TooltipProvider>
        </QueryClientProvider>
    );
};

export default App;
