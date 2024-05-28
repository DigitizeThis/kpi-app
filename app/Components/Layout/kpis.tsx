import React from "react";
import Kpi from "./kpi";
import { KpisPropsAll} from "../../../app/Interfaces/InterfaceKPIs";
import { Card } from "../../../app/Components/Elements/Card";

const Kpis = ({kpis}: KpisPropsAll) => {
    return (
        <div>
            {kpis && kpis.map((kpi, i) => {
                console.log("DATA", kpi);
                return (
                    <Card key={i.toString()}>
                        <Kpi
                            key={kpi._id}
                            {...kpi}
                        />
                    </Card>
                );
            })}
        </div>
    );
};

export default Kpis;

