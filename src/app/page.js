import ProductList from "../components/productList";

export default function Home() {
  return (
    <div>
      <ProductList />
    </div>
  );
}

function old() {
  return (
    <>
      <main>
        <section>
          <h2>Examples</h2>
          <div>
            <h3>DIONISIO</h3>
            <div>{"179€"}</div>
            <button
              className="snipcart-add-item"
              data-item-id="XX-DIONISIO-123"
              data-item-price="179.00"
              data-item-url="./"
              data-item-description="ALLACCIATO UOMO DIONISIO"
              data-item-image="https://www.datocms-assets.com/88680/1676643861-dionisio.jpg"
              data-item-name="dionisio-oxford-cuoio"
              data-item-custom1-name="Color"
              data-item-custom1-options="Blu|Marrone|Marrone Chiaro"
              data-item-custom2-name="Size"
              data-item-custom2-options="39|40|40.5|41|42|43|44"
            >
              Add to cart
            </button>
          </div>
          <div>
            <h3>ARIO</h3>
            <div>{"179€"}</div>
            <button
              className="snipcart-add-item"
              data-item-id="XX-ARIO-456"
              data-item-price="179.00"
              data-item-url="./"
              data-item-description="ALLACCIATO UOMO ARIO"
              data-item-image="https://www.datocms-assets.com/88680/1676643865-ario.jpg"
              data-item-name="Ario"
              data-item-custom1-name="Color"
              data-item-custom1-options="Testa di Moro|Marrone Chiaro"
              data-item-custom2-name="Size"
              data-item-custom2-options="39|40|41|42|43|44|45"
            >
              Add to cart
            </button>
          </div>
        </section>
        <div
          hidden
          id="snipcart"
          data-api-key={process.env.NEXT_PUBLIC_SNIPCART_API_KEY}
          data-config-modal-style="side"
        />
      </main>
    </>
  );
}
