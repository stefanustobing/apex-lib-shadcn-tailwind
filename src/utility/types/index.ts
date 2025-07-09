/*
/!**We will define some types that will enable us to passing the reference to component and accepting input a generic HTML element to pass as prop
 * We define some types that accepting input a generic element type and from this generic element type, we extract all the props that these elements takes in input along with `as` prop and `ref` prop
 *!/
import React, { JSX } from "react";

//Extract all the props of particular component
export type PropsOf<
  C extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<unknown>,
> = JSX.LibraryManagedAttributes<C, React.ComponentPropsWithoutRef<C>>;

//to add asProp to the prop that our component takes as input
type AsProp<C extends React.ElementType> = {
  /!**
   * An override of the default HTML tag
   * Can also be another React component
   *!/
  as?: C;
};

/!**
 * Allows for extending a set of props (`ExtendedProps`) by an overriding set of props
 * (`OverrideProps`), ensuring that any duplicates are overridden by theoverriding set of props.
 *!/
export type ExtendableProps<
  ExtendedProps = {},
  OverrideProps = {},
> = OverrideProps & Omit<ExtendedProps, keyof OverrideProps>;

/!**
 * Allows for inheriting the props from the specified element type so that
 * props like children, className & style work, as well as element-specific
 * attributes like aria roles. The component (`C`) must be passed in.
 *!/
export type InheritableElementProps<
  C extends React.ElementType,
  Props = {},
> = ExtendableProps<PropsOf<C>, Props>;

/!**
 * A more sophisticated version of `InheritableElementProps` where the passed in `as prop will determine whic props can be included`
 *!/
export type PolymorphicComponentProps<
  C extends React.ElementType,
  Props = {},
> = InheritableElementProps<C, Props & AsProp<C>>;

export type PolymorphicRef<C extends React.ElementType> =
  React.ComponentPropsWithRef<C>["ref"];

export type PolymorphicComponentPropsWithRef<
  C extends React.ElementType,
  Props = {},
> = PolymorphicComponentProps<C, Props> & { ref?: PolymorphicRef<C> };
*/
