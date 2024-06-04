import LayoutContainer from "../LayoutContainer";

import ServicesMapper from "../ServicesMapper";

export default function Services() {
  return (
    <div className="bg-accent py-20" id="services">
      <LayoutContainer>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 xl:gap-4">
          <ServicesMapper />
        </div>
      </LayoutContainer>
    </div>
  );
}
