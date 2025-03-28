import { BsPersonCircle } from "react-icons/bs";
import styled from "styled-components";

type TSize = "large" | "medium" | "small";

interface Props {
  size: TSize;
  url?: string;
  onClick?: () => void;
}
const Profile = ({ size, url, onClick }: Props) => {
  return (
    <ProfileStyle
      $size={size}
      $url={url}
      onClick={onClick}
      onMouseEnter={undefined}
    >
      {url ? <div className="icon"></div> : <BsPersonCircle />}
    </ProfileStyle>
  );
};

interface ProfileStyleProps {
  $size: TSize;
  $url?: string;
}
const ProfileStyle = styled.div<ProfileStyleProps>`
  width: ${({ $size }) =>
    $size === "large" ? "238px" : $size === "medium" ? "75px" : "28px"};
  height: ${({ $size }) =>
    $size === "large" ? "238px" : $size === "medium" ? "75px" : "28px"};

  .icon {
    width: 100%;
    height: 100%;
    border-radius: 50%;

    background-color: ${({ theme }) => theme.color.grey1};
    background-image: ${({ $url }) => ($url ? `url(${$url})` : "")};
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }

  svg {
    width: 100%;
    height: 100%;
    color: ${({ theme }) => theme.color.grey1};
  }
`;
export default Profile;
