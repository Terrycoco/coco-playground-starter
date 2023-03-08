import { useTheme } from '@/hooks'

const styles =   {
  page:
    minHeight: "100vh",
    width: "100vw",
    overflowY: "scroll",
    zIndex: "0",
}
};

const Page = (props) => {
  return <div styles={styles.page}>{props.children}</div>;
};

export default Page;
