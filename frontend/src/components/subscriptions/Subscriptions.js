import React from "react";

import { IconContext } from "react-icons/lib";
import {
    PricingSection,
    PricingWrapper,
    PricingHeading,
    PricingContainer,
    PricingCard,
    PricingCardInfo,
    PricingCardIcon,
    PricingCardPlan,
    PricingCardCost,
    PricingCardLength,
    PricingCardFeatures,
    PricingCardFeature,
    Button
} from "./Pricing";
import { SubscriptionData } from "../../data/SubscriptionData";

function Pricing() {
    return (
        <IconContext.Provider value={{ color: "#a9b3c1", size: 64 }}>
            <PricingSection>
                <PricingWrapper>
                    <PricingHeading>Our Services</PricingHeading>
                    <PricingContainer>
                        {SubscriptionData.map((items) => {
                            return (
                                <PricingCard to={items.path}>
                                    <PricingCardInfo>
                                        <PricingCardIcon>
                                            {items.icon}
                                        </PricingCardIcon>
                                        <PricingCardPlan>
                                            {items.name}
                                        </PricingCardPlan>
                                        <PricingCardCost>
                                            {items.price}
                                        </PricingCardCost>
                                        <PricingCardLength>
                                            {items.valid}
                                        </PricingCardLength>

                                        <PricingCardFeatures>
                                            <PricingCardFeature>
                                                {items.feature1}
                                            </PricingCardFeature>
                                            <PricingCardFeature>
                                                {items.feature2}
                                            </PricingCardFeature>
                                            <PricingCardFeature>
                                                {items.feature3}
                                            </PricingCardFeature>
                                            <PricingCardFeature>
                                                {items.feature4}
                                            </PricingCardFeature>
                                        </PricingCardFeatures>
                                        <Button>{items.button}</Button>
                                    </PricingCardInfo>
                                </PricingCard>
                            );
                        })}
                    </PricingContainer>
                </PricingWrapper>
            </PricingSection>
        </IconContext.Provider>
    );
}
export default Pricing;
