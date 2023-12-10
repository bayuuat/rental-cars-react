import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AccordionFaq() {
  return (
    <>
      <article id="faq" className="container">
        <div className="flex flex-wrap">
          <div className="w-full xl:w-5/12">
            <h3 className="font-bold">Frequently Asked Question</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
          <Accordion
            type="single"
            collapsible
            className="mb-4 w-full xl:w-7/12"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Apa saja syarat yang dibutuhkan?
              </AccordionTrigger>
              <AccordionContent>
                <strong>This is the fourth item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classNamees that we use to style each element. These
                classNamees control the overall appearance, as well as the
                showing and hiding via CSS transitions. You can modify any of
                this with custom CSS or overriding our default variables. It's
                also worth noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                Berapa hari minimal sewa mobil lepas kunci?
              </AccordionTrigger>
              <AccordionContent>
                <strong>This is the fourth item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classNamees that we use to style each element. These
                classNamees control the overall appearance, as well as the
                showing and hiding via CSS transitions. You can modify any of
                this with custom CSS or overriding our default variables. It's
                also worth noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                Berapa hari sebelumnya sabaiknya booking sewa mobil?
              </AccordionTrigger>
              <AccordionContent>
                <strong>This is the fourth item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classNamees that we use to style each element. These
                classNamees control the overall appearance, as well as the
                showing and hiding via CSS transitions. You can modify any of
                this with custom CSS or overriding our default variables. It's
                also worth noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                Apakah Ada biaya antar-jemput?
              </AccordionTrigger>
              <AccordionContent>
                <strong>This is the fourth item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classNamees that we use to style each element. These
                classNamees control the overall appearance, as well as the
                showing and hiding via CSS transitions. You can modify any of
                this with custom CSS or overriding our default variables. It's
                also worth noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>
                Bagaimana jika terjadi kecelakaan?
              </AccordionTrigger>
              <AccordionContent>
                <strong>This is the fifth item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classNamees that we use to style each element. These
                classNamees control the overall appearance, as well as the
                showing and hiding via CSS transitions. You can modify any of
                this with custom CSS or overriding our default variables. It's
                also worth noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </article>
    </>
  );
}
