import DevelopmentPageLayout from '@/components/DevelopmentPageLayout';
import { image23 } from '@/assets/imageImports';

const Ownership = () => {
    return (
        <DevelopmentPageLayout
            title="Ownership"
            subtitle="Understanding property ownership in Mexico"
            heroImage={image23}
        >
            <div className="space-y-8">
                <p>
                    Rancho Costa Verde subdivides large parcels into individual legal parcels that can be conveyed directly to Mexican citizens and to foreigners through Fideicomisos or Bank Trusts.
                </p>

                <section>
                    <h3 className="text-2xl font-cormorant mb-4 text-black">The Fideicomiso (Bank Trust)</h3>
                    <p>
                        Any foreigner can create a Fideicomiso (the equivalent to an American beneficial trust) through a Mexican bank in order to purchase real estate anywhere in Mexico, including what is commonly called the Restricted Zone (within 50 miles of a border with another country or within in 30 miles of the coast).
                    </p>
                    <p className="mt-4">
                        To do so, the buyer requests a Mexican bank of his/her choice to act as a trustee on his/her behalf. Title is transferred to the trust and they buyer is the beneficiary. This conveys the same bundle of rights that holding property “fee simple” does in the United States. You can will it, lease it, sell it, rent it and improve upon on it. It is absolute, irrevocable and in perpetuity which is the definition of ownership.
                    </p>
                </section>

                <section>
                    <h3 className="text-2xl font-cormorant mb-4 text-black">Legal Support</h3>
                    <p>
                        Public Notario number 20 of Santa Rosalia, Lic. Guillermo Santillan Meza, has opened a satellite office in Rancho Costa Verde’s Mexicali office for the specific reason of executing Fideicomisos for Rancho Costa Verde owners. We have also created a relationship with Intercam Bank to administer the trusts.
                    </p>
                </section>
            </div>
        </DevelopmentPageLayout>
    );
};

export default Ownership;
