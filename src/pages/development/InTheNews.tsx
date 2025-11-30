import DevelopmentPageLayout from '@/components/DevelopmentPageLayout';
import { image14 } from '@/assets/imageImports';

const InTheNews = () => {
    return (
        <DevelopmentPageLayout
            title="In the News"
            subtitle="Latest news and media features about Rancho Costa Verde"
            heroImage={image14}
        >
            <div className="space-y-8">
                <section>
                    <h3 className="text-2xl font-cormorant mb-4 text-black">Baja Green Festival Presented by Rancho Costa Verde</h3>
                    <p>
                        Rancho Costa Verde recently had a very productive meeting with The Mayor of Ensenada, Gilberto Hirata discussing the exciting growth of Ensenada and how Rancho Costa Verde is contributing to the local economy. The government of Ensenada is very pleased to have Rancho Costa Verde creating employment for the construction industry, bringing in tourism dollars to the local businesses and encourages us in our efforts to market Baja, Ensenada and Rancho Costa Verde. Local newspapers and media were on site to cover this momentous event.
                    </p>
                    <p className="mt-4">
                        <a
                            href="http://monitoreconomico.org/noticias/2016/nov/08/presentaron-desarrollo-turistico-ecologico-para-ensenada/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                        >
                            Read Article: Presentaron desarrollo ecologico para Ensenada
                        </a>
                    </p>
                </section>

                <section>
                    <h3 className="text-2xl font-cormorant mb-4 text-black">Community Involvement</h3>
                    <p>
                        We had the honor of having the mayor of San Felipe Jose Luis Dagnino Lopez visit us during the recent Super Moon and he was very encouraged with all the amazing growth of Rancho Costa Verde and all of our many contributions to the surrounding community and local charities.
                    </p>
                    <p className="mt-4">
                        Rancho Costa Verde was pleased to be acknowledged for our contributions to The Voluntad San Felipe and the Committee of Tourism and Conventions of Mexicali. The local government gave a recognition to RanchoCostaVerde for supporting The San Felipe Monumental Letters Project.
                    </p>
                </section>
            </div>
        </DevelopmentPageLayout>
    );
};

export default InTheNews;
