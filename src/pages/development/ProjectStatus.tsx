import DevelopmentPageLayout from '@/components/DevelopmentPageLayout';
import { image5 } from '@/assets/imageImports';

const ProjectStatus = () => {
    return (
        <DevelopmentPageLayout
            title="Project Status"
            subtitle="Current development status, milestones, and timelines"
            heroImage={image5}
        >
            <div className="space-y-8">
                <section>
                    <h3 className="text-2xl font-cormorant mb-4 text-black">Legal Status</h3>
                    <p>
                        Rancho Costa Verde S. de R.L de C.V. is a legal Mexican company, located at Calzada Cuauhtemoc #940, Pro Hogar, Mexicali Baja California, Mexico 21240. The company was established to develop its land located at kilometer 52+758.75 on the San-Felipe – Puertecitos Highway in the County of Ensenada. The property was originally considered rustic land and it is now designated as an Ecological Tourist Development with legal streets and individual homesite parcels with legal tax ID numbers.
                    </p>
                </section>

                <section>
                    <h3 className="text-2xl font-cormorant mb-4 text-black">Government Authorizations</h3>
                    <p>
                        Rancho Costa Verde has accomplished the administrative, legal and technical formalities required by law under the H. Ayuntamiento de Ensenadas (Ensenada County). Ensenada County has issued the authorization of the Ecological Tourist Development, “Rancho Costa Verde”. The government of Baja California Mexico has published this authorization in the government’s Official Gazette under the volume CXXIII number 32.
                    </p>
                </section>

                <section>
                    <h3 className="text-2xl font-cormorant mb-4 text-black">Compliance and Approvals</h3>
                    <p>
                        Rancho Costa Verde fulfilled all of the formalities required by Federal, State and Municipal Laws, to create an Ecological Tourist Development. Rancho Costa Verde has met all required government standards, regulations and has obtained AF1, AF2, AF3, AF4, and AF5 approvals.
                    </p>
                    <p className="mt-4">
                        All surveys, studies, plans, and authorizations including but not limited to performing a Topographical Survey, approval of a Master Plan, creation of an Urban Impact Study, creation of a Road Access Plan, obtaining Environmental Impact Study Approvals, and providing authorized solutions for electricity, potable water, and wastewater treatment have been accomplished.
                    </p>
                </section>

                <div className="pt-8 border-t border-gray-100">
                    <p className="font-medium">Sincerely,</p>
                    <p className="font-cormorant text-xl">The Law Firm of GAMOLI</p>
                </div>
            </div>
        </DevelopmentPageLayout>
    );
};

export default ProjectStatus;
