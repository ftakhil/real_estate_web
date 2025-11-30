import DevelopmentPageLayout from '@/components/DevelopmentPageLayout';
import { image16 } from '@/assets/imageImports';

const ProjectUpdates = () => {
    return (
        <DevelopmentPageLayout
            title="Project Updates"
            subtitle="Latest news and developments at Rancho Costa Verde"
            heroImage={image16}
        >
            <div className="space-y-8">
                <p>
                    We are happy to announce exciting new things happening at Rancho Costa Verde as well as to provide some important information and updates. Our casitas and amenities at the club house have been completed and more features are scheduled in the future. We have created our Home Owners Association and improvements to our roads are in process.
                </p>

                <section>
                    <h3 className="text-2xl font-cormorant mb-4 text-black">Casitas</h3>
                    <p>
                        Rancho Costa Verde has built 12 casitas for our property owners use. They are furnished with custom alder furniture and have been decorated with bright flavors of Mexico. Our owners are enjoying vacationing at Rancho Costa Verde at this time.
                    </p>
                </section>

                <section>
                    <h3 className="text-2xl font-cormorant mb-4 text-black">Club House Amenities</h3>
                    <p>
                        New Bocce Ball, Shuffleboard, and Horseshoe courts have been installed at the pool area and a Pickle Ball Court is almost completed next to the Club House. A seven hole putting green will also be going in behind the pool and there will be more to come!
                    </p>
                </section>

                <section>
                    <h3 className="text-2xl font-cormorant mb-4 text-black">Road Plan</h3>
                    <p>
                        Road improvements are underway. The official surveys have been completed to ensure precise locations and specifications of 12 meters wide. A road width of 12 meters allows for two lanes in the middle and parking on each side. Our main entry road, Avenida Costa Verde, and the beachfront road, Calle Santa Lorena, are being improved first.
                    </p>
                </section>

                <section>
                    <h3 className="text-2xl font-cormorant mb-4 text-black">Fideicomisos</h3>
                    <p>
                        Public Notario number 20 of Santa Rosalia, Lic. Guillermo Santillan Meza, has opened a satellite office in Rancho Costa Verde’s Mexicali office for the specific reason of executing Fideicomisos for Rancho Costa Verde owners. We have also created a relationship with Intercam Bank to administer the trusts. The entire Fideicomiso process can be completed within three months.
                    </p>
                </section>

                <section>
                    <h3 className="text-2xl font-cormorant mb-4 text-black">Construction</h3>
                    <p>
                        Rancho Costa Verde now has over 50 completed homes with 23 additional homes under construction and over 20 homes with completed floorplans in the contract stage. All homes are unique and beautiful with styles ranging from traditional Spanish to modern Mexican. Each home is custom made to the liking of the owner and we are here to help you with your design that also fits your budget.
                    </p>
                </section>
            </div>
        </DevelopmentPageLayout>
    );
};

export default ProjectUpdates;
