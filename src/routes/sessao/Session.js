import { SectionHeader } from "../../components/shared/SectionHeader";

import Screen from "./Screen";
import SeatsRow from "./SeatsRow";
import {Seats} from './SeatsStyled';
import SeatsLegend from "./SeatsLegend";
import MakeReservationsForm from "./MakeReservationsForm";

export default function Session(){
    return (
        <>
        <section>
            <SectionHeader>Selecione os assentos</SectionHeader>
            <Screen />
            <Seats>
                <SeatsRow />
                <SeatsRow />
                <SeatsRow />
                <SeatsRow />
                <SeatsRow />
            </Seats>
            <SeatsLegend />
            <MakeReservationsForm />
        </section>
        </>
    );
}