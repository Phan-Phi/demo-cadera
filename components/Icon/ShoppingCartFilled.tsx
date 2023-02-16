import SVGIconBase, { SvgIconProps } from "./SVGIconBase";

const ShoppingCartFilled = (props: SvgIconProps) => {
  return (
    <SVGIconBase {...props}>
      <path d="M7 22a2 2 0 100-4 2 2 0 000 4zM17 22a2 2 0 100-4 2 2 0 000 4zM3.447 2.106a1 1 0 10-.894 1.788l1.003.502a1 1 0 01.549.804l.734 8.072A3 3 0 007.826 16h8.665a3 3 0 002.885-2.176l1.221-4.275A2 2 0 0018.674 7H6.277l-.18-1.981A3 3 0 004.45 2.607l-1.004-.501z" />
    </SVGIconBase>
  );
};

export default ShoppingCartFilled;
