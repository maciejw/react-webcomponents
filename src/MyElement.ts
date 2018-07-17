import { LitElement, html } from '@polymer/lit-element';

export interface MyElementHTMLAttributes<T> extends React.HTMLAttributes<T> {
  attribute1?: string;
  prop1?: () => string;
}

export interface MyElement extends MyElementHTMLAttributes<MyElement> {}

export const MyElementFactory = ({ param1 }: MyElementFactory.Params) =>
  class MyElement extends LitElement {
    static get properties() {
      return { attribute1: String, prop1: Function };
    }

    _render(props: MyElementHTMLAttributes<MyElement>) {
      const prop1 = props.prop1 && props.prop1();
      return html`<style> .mood { color: green; } </style>
          Web Components are <span class="mood"> ${param1} ${props.attribute1} ${prop1} ${this.title}</span>!`;
    }
  };

export namespace MyElementFactory {
  export type Params = { param1: string };
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'my-element': React.DetailedHTMLProps<MyElement, MyElement>;
    }
  }
}
