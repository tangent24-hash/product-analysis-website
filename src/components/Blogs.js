import React from "react";

const Blogs = () => {
  return (
    <div className="row m-2">
      <div className="col-12 col-md-6">
        <div class="card shadow-lg">
          <div class="card-body">
            <h5 class="card-title">What is Context API?</h5>
            <p class="card-text">
            The React Context API used to produce global variables that 
            can be accessed from any component. 
            React.createContext() returns a consumer and a 
            provider. Provider is a component that provides the state to its children. 
            It will hold the "store" and be the parent of all the components that might need that store. 
            Consumer is a component that consumes and uses the state. 
            This is the alternative approach to prop drilling.
            </p>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-6">
        <div class="card shadow-lg">
          <div class="card-body">
            <h5 class="card-title">What is semantic tag?</h5>
            <p class="card-text">
            Semantic HTML tags provide information about the contents of those tags that goes beyond 
            just how they look on a page. Text that is enclosed in the 'cite' tag is immediately recognized 
            by the browser as citations. Semantic tags have some meaning.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Blogs;
