import DevelopmentPageLayout from '@/components/DevelopmentPageLayout';
import { image1 } from '@/assets/imageImports';

const GoingGreen = () => {
    return (
        <DevelopmentPageLayout
            title="Going Green"
            subtitle="Commitment to sustainability with eco-friendly building practices"
            heroImage={image1}
        >
            <div className="space-y-8">
                <section>
                    <h3 className="text-2xl font-cormorant mb-4 text-black">Location</h3>
                    <p>
                        The green aspects of Rancho Costa Verde begin with the selection of the location of the community. The property is 150 miles south of the Calexico border, just south of the town of San Felipe, (about a five hour drive from San Diego). It overlooks a portion of the Sea of Cortes that is a designated biosphere reserve. The main two protected endangered species found only in this area of the world are the Totuava which is a giant sea bass and the Vaquita which is a miniature dolphin.
                    </p>
                    <p className="mt-4">
                        Other protected species found in this area are sea turtles and whales. There is virtually no air pollution, water pollution, or noise pollution in this area. And, there is no ambient light at night except from the moon and stars.
                    </p>
                </section>

                <section>
                    <h3 className="text-2xl font-cormorant mb-4 text-black">Protection of Endangered Flora</h3>
                    <p>
                        While the Mexican government has done many things to encourage foreign investment in Baja California, including modifying their constitution to allow foreigners to own property on the coast as well as upgrading the highways, airports and marinas, the government’s environmental agencies, Semarnat and Profepa have strict laws which they aggressively enforce. For example: it is prohibited for any sewage or urban runoff to enter the Sea of Cortes from communities in this area.
                    </p>
                    <p className="mt-4">
                        In addition, we were required to perform two environmental impact studies and an environmental rescue plan for protected flora, Ironwood and certain types of cactus, during our subdivision approval process. We catalogued these protected plants found on the property by GPS coordinates. Any protected plants located where a road or home site will be, must be moved to a new location on the property and catalogued along with the planting of five additional such plants.
                    </p>
                </section>

                <section>
                    <h3 className="text-2xl font-cormorant mb-4 text-black">Low Density</h3>
                    <p>
                        We designed Rancho Costa Verde to have extremely low density with approximately one home per acre. Over 40% of the community is designated as an ecological preserve. Our average home site is 10,000 square feet, 100 feet by 100 feet which is twice the size of an average home site in most neighborhoods in San Diego.
                    </p>
                    <p className="mt-4">
                        Our building guidelines allow for a maximum of one half of a home site to be utilized for a building envelope. The end result is that more than 50 percent of the project will never be developed. Our roads are surfaced with compacted clay from the area, not asphalt.
                    </p>
                </section>

                <section>
                    <h3 className="text-2xl font-cormorant mb-4 text-black">Home Construction</h3>
                    <p>
                        The other very important green aspect of the project is the technology incorporated in the homes that we build for our owners. We use Poly Styrene Block as the primary building material for our homes. It is made from recycled Styrofoam and has an extremely high insulation factor of near R-35.
                    </p>
                    <p className="mt-4">
                        Our homes are powered completely by solar and produce and store more electricity than they use. The homes have all the luxuries of any modern home, including a very efficient air conditioning systems.
                    </p>
                    <p className="mt-4">
                        Our homes also have individual waste water treatment systems, tested and certified by NSF International and approved by the Mexican Government environmental agencies. These systems treat and recycle gray and black water to a quality that allows for safe irrigation.
                    </p>
                </section>
            </div>
        </DevelopmentPageLayout>
    );
};

export default GoingGreen;
