import DevelopmentPageLayout from '@/components/DevelopmentPageLayout';
import { image14 } from '@/assets/imageImports'; // Using a placeholder image for now

const WhereWeAre = () => {
    return (
        <DevelopmentPageLayout
            title="Where We Are"
            subtitle="Km 52.5 Hwy 5 San Felipe - Puertecitos Corridor, Baja California, Mexico"
            heroImage={image14}
        >
            <div className="space-y-8">
                <p>
                    Located in the heart of Baja California, Rancho Costa Verde offers the perfect blend of luxury, nature, and convenience for residents and visitors alike.
                </p>

                <div className="bg-gray-50 p-8 rounded-lg border border-gray-100">
                    <h3 className="text-2xl font-cormorant mb-4 text-black">Drive Times</h3>
                    <ul className="space-y-3">
                        <li className="flex items-center">
                            <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                            San Felipe, Baja California – 40 minutes
                        </li>
                        <li className="flex items-center">
                            <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                            Calexico, CA, USA – 2 hours, 40 minutes
                        </li>
                        <li className="flex items-center">
                            <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                            San Diego, CA, USA – 4 hours, 40 minutes
                        </li>
                    </ul>
                </div>
            </div>
        </DevelopmentPageLayout>
    );
};

export default WhereWeAre;
