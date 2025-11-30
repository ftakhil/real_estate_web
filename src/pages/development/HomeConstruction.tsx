import DevelopmentPageLayout from '@/components/DevelopmentPageLayout';
import { image2 } from '@/assets/imageImports';

const HomeConstruction = () => {
    return (
        <DevelopmentPageLayout
            title="Home Construction"
            subtitle="Build your dream home with our trusted construction contractors"
            heroImage={image2}
        >
            <div className="space-y-8">
                <p>
                    All homes at Rancho Costa Verde are unique and custom made for each owner. Construction pricing starts as low as $120 per square foot. Solar systems are sized based on the home’s electronics and planned usage habits of owners.
                </p>

                <section>
                    <h3 className="text-2xl font-cormorant mb-4 text-black">Meet Our Builders</h3>
                    <p>
                        All contractors approved to build homes at Rancho Costa Verde have many successful years of building homes for US citizens.
                    </p>
                </section>

                <section>
                    <h3 className="text-2xl font-cormorant mb-4 text-black">Design Process</h3>
                    <p>
                        The building process begins with filling out our building questionnaire and submitting it to our San Diego office. With this information, we can design a home with a floor plan and style to your liking that fits your budget. At any point prior and during the process, owners are welcome to visit Rancho Costa Verde to meet with the builder to plan and see construction progress first hand.
                    </p>
                    <p className="mt-4">
                        Once a floor plan and budget are approved by an owner, elevations are provided according to the style selected by the owner. Construction begins when all designs are approved by the owner, a building contract is executed, the first construction payment is received, the plans are approved by Rancho Costa Verde and building permits are obtained.
                    </p>
                </section>

                <section>
                    <h3 className="text-2xl font-cormorant mb-4 text-black">Project Management and Reporting</h3>
                    <p>
                        Contractors and Rancho Costa Verde provide ongoing updates of construction progress to owners while homes are being built.
                    </p>
                </section>

                <div className="text-center pt-8">
                    <a
                        href="https://www.ranchocostaverde.com/construction-form"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-black text-white px-8 py-3 rounded-full font-inter font-medium hover:bg-gray-800 transition-colors"
                    >
                        Complete Building Form
                    </a>
                </div>
            </div>
        </DevelopmentPageLayout>
    );
};

export default HomeConstruction;
