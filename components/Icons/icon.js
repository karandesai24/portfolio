import {
  IconMail,
  IconLinkedin,
  IconTwitter,
  IconGithub,
  IconExternal,
  IconLeetcode,
} from "@/components/Icons";

const Icon = ({ name }) => {
  switch (name) {
    case "mail":
      return <IconMail />;
    case "github":
      return <IconGithub />;
    case "leetcode":
      return <IconLeetcode />;
    case "linkedin":
      return <IconLinkedin />;

    case "twitter":
      return <IconTwitter />;
    default:
      return <IconExternal />;
  }
};

export default Icon;
