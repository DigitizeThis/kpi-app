import React from "react";
import Kpi from "./kpi";
import { AppState} from "../../../app/Interfaces/InterfaceKPIs";
import { Card } from "../../../app/Components/Elements/Card";

const Kpis = ({appData}: AppState) => {
    return (
        <div>
            {appData && appData.map((kpi, i) => {
                console.log("DATA", kpi);
                return (
                    <Card key={i.toString()}>
                        <Kpi
                            key={i.toString()}
                            {...kpi}
                        />
                    </Card>
                );
            })}
        </div>
    );
};

export default Kpis;

