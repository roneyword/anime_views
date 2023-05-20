import { CardContainer } from "./styles";
import { Skeleton } from "antd";

export default function CardSkeleton() {
  const skeletonList = () => {
    const skeletons = [];

    for(let i=0; i<10; i++) {
      skeletons.push(
        <li key={i} >
          <article>
            <div className="card-content  card-content-image">
              <Skeleton.Image active className="skeleton-image"/>
            </div>

            <div className="card-content card-content-title">
              <Skeleton.Button active shape="square" className="skeleton-title"/>
            </div>
          </article>
        </li>
      );
    }
    return skeletons;
  }

  return (
    <CardContainer>
      {skeletonList()}
    </CardContainer>
  )
}