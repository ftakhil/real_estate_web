import DevelopmentPageLayout from '@/components/DevelopmentPageLayout';
import { image25 } from '@/assets/imageImports';

const Careers = () => {
    return (
        <DevelopmentPageLayout
            title="Careers"
            subtitle="Join our passionate team dedicated to creating sustainable, luxurious living"
            heroImage={image25}
        >
            <div className="space-y-8">
                <section>
                    <h3 className="text-2xl font-cormorant mb-4 text-black">For Real Estate Professionals</h3>
                    <p className="mb-6">
                        We have a great opportunity for motivated brokers and agents!
                    </p>
                    <ul className="space-y-3 list-disc pl-5">
                        <li>5-Years worth of developer inventory and constantly expanding</li>
                        <li>Generous compensation package</li>
                        <li>Developer financing, low-interest rates</li>
                        <li>In-house training to get off to a fast start</li>
                        <li>Master-planned beachfront communities</li>
                        <li>No credit checks and everyone qualifies for financing</li>
                    </ul>
                    <p className="mt-6">
                        Contact us to find out more about how you can benefit in a real estate career with R-MAC Properties, Inc.
                    </p>
                </section>

                <div className="bg-gray-50 p-8 rounded-lg text-center">
                    <h3 className="text-2xl font-cormorant mb-4 text-black">Call Now</h3>
                    <a href="tel:+18002117400" className="text-xl font-medium hover:text-gray-600 transition-colors">
                        1 (800) 211-7400
                    </a>
                    <div className="mt-6">
                        <a
                            href="http://rmac.com/real-estate-career-opportun.html"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-black text-white px-8 py-3 rounded-full font-inter font-medium hover:bg-gray-800 transition-colors"
                        >
                            Learn More
                        </a>
                    </div>
                </div>
            </div>
        </DevelopmentPageLayout>
    );
};

export default Careers;
