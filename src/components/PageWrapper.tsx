import { ReactNode } from "react";
import styles from "./PageWrapper.module.css";
interface PageWrapperProps {
  children: ReactNode;
}

function PageWrapper({ children }: PageWrapperProps) {
  return <div className={styles.pageWrapper}>{children}</div>;
}

export default PageWrapper;
