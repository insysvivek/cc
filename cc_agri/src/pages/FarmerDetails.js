import React from "react";
import { CAccordion,CAccordionItem,CAccordionBody,CAccordionHeader } from '@coreui/react';
import Sidebar from "../components/Sidebar";

const FarmerDetails = () => {
    return (
        <>
            <Sidebar/>
            <CAccordion flush style={{marginLeft:'20rem', backgroundColor:'gray'}}>
                <CAccordionItem itemKey={1}>
                    <CAccordionHeader>Accordion Item #1</CAccordionHeader>
                    <CAccordionBody>
                        <strong>This is the first item's accordion body.</strong> 
                    </CAccordionBody>
                </CAccordionItem>
                <CAccordionItem itemKey={2}>
                    <CAccordionHeader>Accordion Item #2</CAccordionHeader>
                    <CAccordionBody>
                        <strong>This is the second item's accordion body.</strong> 
                    </CAccordionBody>
                </CAccordionItem>
                <CAccordionItem itemKey={3}>
                    <CAccordionHeader>Accordion Item #3</CAccordionHeader>
                    <CAccordionBody>
                        <strong>This is the third item's accordion body.</strong> 
                    </CAccordionBody>
                </CAccordionItem>
            </CAccordion>
        </>
    );
};

export default FarmerDetails;