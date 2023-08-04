import "./style.css";

interface IThemeSwitcherProps {
  isLight: boolean;
  changeTheme: () => void;
}

export default function ThemeSwitcher({
  isLight,
  changeTheme,
}: IThemeSwitcherProps) {
  return (
    <label className="switch mx-2 my-auto">
      <input type="checkbox" checked={isLight} onChange={changeTheme}></input>
      <span className="slider round"></span>
    </label>
  );
}
