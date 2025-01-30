import { HeadlingProps } from "./Headling.props";
import styles from './Headling.module.css'

export function Headling({ children }: HeadlingProps) {
  return <h1 className={styles['headling']}>{children}</h1>;
}
