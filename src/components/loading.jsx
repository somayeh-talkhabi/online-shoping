import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
//*****************loading for products ******************* */

export function LoadingProducts () {
    return (
      <div className="row my-3 mx-3">
          <div className="col-3">
            <Skeleton height={450} />
          </div>
          <div className="col-3">
            <Skeleton height={450} />
          </div>
          <div className="col-3">
            <Skeleton height={450} />
          </div>
          <div className="col-3">
            <Skeleton height={450} />
          </div>
        
      </div>
    );
}

//******************* loading for product ******************* */
 export const LoadingProduct = () => {
   return (
     <div className="container">
       <div className="row">
         <div className="col-6 py-5">
           <Skeleton width={400} height={500} />
         </div>
         <div className="col-6 py-5 text-center">
           <Skeleton width={300} height={30} />
           <Skeleton className="my-3" width={500} height={30} />
           <Skeleton width={500} height={200} />
           <div
             className=" d-flex flex-row justify-content-center  my-5"
             style={{ width: 620 }}>
             <Skeleton className="mx-4" width={60} height={30} />
             <Skeleton width={60} height={30} />
           </div>
         </div>
       </div>
     </div>
   );
 };



//*****************loading for cart **************** */
export function LoadingCart () {
  return ( 
    <div className="container">
      <div className="row">
        <div className="col-6">
          <Skeleton width={400} height={400} />
        </div>
        <div className="col-6">
          <Skeleton width={100} height={60} />
        </div>
      </div>
    </div>
   );
}



