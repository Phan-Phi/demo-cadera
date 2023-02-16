import SVGIconBase, { SvgIconProps } from "./SVGIconBase";

const ArrowRightLineOutlined = (props: SvgIconProps) => {
  return (
    <SVGIconBase {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.09 7.265a1 1 0 011.414.057l3.23 3.5a1 1 0 010 1.356l-3.23 3.5a1 1 0 11-1.47-1.356l1.682-1.822H6a1 1 0 110-2h9.716l-1.682-1.822a1 1 0 01.057-1.413z"
      />
    </SVGIconBase>
  );
};

export default ArrowRightLineOutlined;
