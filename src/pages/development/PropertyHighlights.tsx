import DevelopmentPageLayout from '@/components/DevelopmentPageLayout';
import { image25 } from '@/assets/imageImports';

const PropertyHighlights = () => {
    return (
        <DevelopmentPageLayout
            title="Property Highlights"
            subtitle="A 1,100 acre master planned ecological residential community"
            heroImage={image25}
        >
            <div className="space-y-6">
                <p>
                    Rancho Costa Verde is a 1,100 acre master planned ecological residential community that has made maintaining the natural beauty of Baja California a top priority.
                </p>
                <p>
                    Our master plan was designed with our amazing views of the sea and mountains in mind. We have incorporated staggered lot lines so that the impact of your neighbor’s home on your view will be minimized, buffer zones and green belts to maintain an open feeling. At project completion, over half of Rancho Costa Verde will be left undeveloped with 40 percent dedicated as an ecological preserve.
                </p>
                <p>
                    Rancho Costa Verde will have miles of natural winding walking trails, accented with ocotillos, elephant trees, iron wood trees, palos verdes and varieties of cacti, all peppered amongst natural arroyos and valleys for you to enjoy as the sea breezes from the Sea of Cortes roll up from our beaches, through our community, and into the majestic San Felipe mountains.
                </p>
                <p>
                    Rancho Costa Verde has a completely solar powered, fully functional clubhouse that includes a bar, restaurant, beautiful swimming pool, hot tub, pickle ball court, volleyball, bocce ball court, shuffle board, horse shoe pit, putting green and more!
                </p>
                <p>
                    One of the unique features of Rancho Costa Verde is that no matter where you are on the development, or how far you go back… you see water. And lots of it! This is because Rancho Costa Verde is located on a gentle slope that begins at the beach and recedes back up towards the mountains, providing sea views all along the way.
                </p>
                <p>
                    Rancho Costa Verde was designed to blend with the beauty of its natural environment. While all homes are unique and custom made, we have registered building guidelines with height limits and setbacks to minimize impact on views, and allowed home styles of Mexican, Spanish, Mediterranean, and Santa Fe with earth tone colors to maintain the style of Baja California.
                </p>
            </div>
        </DevelopmentPageLayout>
    );
};

export default PropertyHighlights;
