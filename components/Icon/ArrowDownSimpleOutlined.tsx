import SVGIconBase, { SvgIconProps } from "./SVGIconBase";

const ArrowDownSimpleOutlined = (props: SvgIconProps) => {
  return (
    <SVGIconBase {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.207 9.793a1 1 0 00-1.414 0L12 12.586 9.207 9.793a1 1 0 00-1.414 1.414l3.5 3.5a1 1 0 001.414 0l3.5-3.5a1 1 0 000-1.414z"
      />
    </SVGIconBase>
  );
};

export default ArrowDownSimpleOutlined;
