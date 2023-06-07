import React from "react";

export default function PostFeed1() {
  return (
    <div>
      <div className="container">
        <label htmlFor="formGroupExampleInput" className="form-label mt-2">
          Title of the post
        </label>
        <input
          type="text"
          className="form-control  mt-2"
          id="formGroupExampleInput"
          placeholder="Title"
        ></input>

        <label htmlFor="floatingTextarea" className=" mt-4">Write Something Cool!!</label>
        <textarea
          className="form-control mt-2"
          placeholder=""
          id="floatingTextarea"
        ></textarea>
      </div>
      <div className="btn btn-primary btn-rounded mt-3">
        <label className="form-label text-white" htmlFor="customFile1">
          Choose file
        </label>
        <input type="file" className="form-control d-none" id="customFile1" />
      </div>
    </div>
  );
}
