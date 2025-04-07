class MyHero extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      
      // Component HTML structure
      this.shadowRoot.innerHTML = `
        <style>
          /* Scoped styles that won't leak */
          .hero {
            display: flex;
            justify-content: center;
            items-center: center;
            flex-direction: column;
            text-align: center;
            padding: 20px;
            background:rgb(204, 204, 204);
          }

        .hero-heading {
            font-size: 30px;
            font-weight: bold;
        }
            @media (max-width: 900px) {
              .hero-heading {
                  font-size: 18px;
              }
            }
          
        </style>
        
        <section class="hero">
          <h1 class="hero-heading">
            <slot name="heading">Hero Heading Here</slot>
          </h1>
          <p>
          <slot name="subtext">Add text here</slot>
          </p>
        </section>
      `;
    }
    
    // Lifecycle callback when the element is added to the DOM
    connectedCallback() {
      // You can add initialization code here if needed
    }
  }
  
  // Register the element
  customElements.define('my-hero', MyHero);