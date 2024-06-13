import React, { useEffect, useState, useRef } from "react";
import { KpiPropsFeatured, KpiPropsFeaturedAll} from "../../../Interfaces/InterfaceKPIs";
import { SectionProps } from "../../../Interfaces/InterfaceSectionProps";
import CardContainer from "../../Elements/CardContainer";
import { Button } from "../../../Components/Buttons/Button";
import Modal from "../../../Components/Elements/Modal/Modal";
import KpiDetail from "../../../Components/Layout/KpiDetail";
import SectionHeader from "../../../Components/Layout/Sections/SectionHeader";

const CardsFeatured: React.FC<KpiPropsFeaturedAll & SectionProps> = ({ kpis, title, abstract }: KpiPropsFeaturedAll & SectionProps) => {
    const [dataKpi, setDataKpi] = useState<KpiPropsFeatured[]>([]);
    const [showModal, setShowModal] = useState<boolean>(false);

    const ref = useRef<HTMLElement | null>(null);

    useEffect(() => {
        const mainData = kpis;
        setDataKpi(mainData);
    }, [dataKpi]);

    const handleModalClose = () => {
        setShowModal(false);
    };

    const handleModalOpen = (e: MouseEvent) => {
        e.stopPropagation();
        if (ref && ref?.current) {
            console.log('Event status...', ref?.current);
            ref?.current?.click();
            const nextModalActive = !showModal;
            setShowModal(nextModalActive);
        }
        return showModal;
    };
    
    return (
        <section className="flex flex-row flex-wrap my-10 mx-0 justify-left">
            <div className="w-full">
                <SectionHeader title={title} abstract={abstract} />
                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 my-6 w-full">
                    {dataKpi && dataKpi.map((kpi, i) => (
                        <React.Fragment key={i.toString()}>
                            <CardContainer
                                title={kpi.title!}
                                description={kpi.description!}
                                date={kpi.date!}
                                link={""}
                                onShowModal={(e) => handleModalOpen(e)}
                                ref={ref}
                            >
                            </CardContainer>
                        </React.Fragment>
                    ))}
                </div>
            </div>
            <form>
                <Modal show={showModal} width="w-3/5">
                    <Modal.Header>
                        <p className="text-4xl text-center">Intes</p>
                        <p className="text-sm font-light text-center">Those options are already baked in with this model shoot me an email clear blue water but we need distributors to evangelize the new line to local markets</p>
                    </Modal.Header>
                    <Modal.Body>
                        
                        <div className="relative m-0 w-full h-full shrink-0 flex justify-center overflow-hidden rounded-md bg-gray-200 bg-clip-border text-gray-700">
                            <h3 className="textbase text-black my-8 h-96">Charts Here...</h3>
                        </div>
                        <section>
                            <h3 className="text-2xl text-left mt-10">Business Questions</h3>
                        </section>
                        <div className="bg-white-500 w-full h-24 flex justify-center">
                            <KpiDetail />
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <div className="flex flex-row flex-wrap justify-evenly">
                            <Button
                                colorType="secondary"
                                onClick={handleModalClose}
                                label="Cancel"
                                className="h-max w-max rounded-lg px-2 py-1 self-center text-white text-base bg-[#64738b] hover:bg-gray-600"
                            ></Button>
                            <Button
                                disabled={true}
                                className="h-max w-max rounded-lg px-2 py-1 self-center text-white text-base bg-[#64738b] hover:bg-gray-600"
                                type="submit"
                                label="Send Data"
                            ></Button>
                        </div>
                    </Modal.Footer>
                </Modal>
            </form>
        </section>
    );
};

export default CardsFeatured;
