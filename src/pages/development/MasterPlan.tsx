import DevelopmentPageLayout from '@/components/DevelopmentPageLayout';
import { image5 } from '@/assets/imageImports';

const MasterPlan = () => {
    return (
        <DevelopmentPageLayout
            title="Master Plan"
            subtitle="Designed for sustainable living with beautifully planned coastal homes"
            heroImage={image5}
        >
            <div className="space-y-6 text-center">
                <p className="text-lg">
                    Discover the master plan of Rancho Costa Verde, designed for sustainable living with beautifully planned coastal homes, green spaces, and modern amenities.
                </p>
                <div className="mt-8 p-12 bg-gray-50 rounded-lg border border-gray-200">
                    <p className="italic text-gray-500">Master Plan Image Placeholder</p>
                    {/* Ideally we would have the master plan image here */}
                </div>
            </div>
        </DevelopmentPageLayout>
    );
};

export default MasterPlan;
