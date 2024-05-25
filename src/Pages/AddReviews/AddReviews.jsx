import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../providers/AuthProvider';


const AddReviews = () => {
  const { user } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const productName = form.name.value;
    const userName = user?.displayName;
    const email = user?.email;
    const productPhoto = form.photo.value;
    const personalRatings = form.ratings.value;
    const userPhoto = user?.photoURL;
    const review = form.review.value;

    const data = {
      productName,
      userName,
      review,
      email,
      productPhoto,
      personalRatings,
      userPhoto
    };
    console.log(data);
    fetch('http://localhost:5000/reviews', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
            Swal.fire({
                title: "Reviews Added Successfully",
                showClass: {
                  popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                  `
                },
                hideClass: {
                  popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                  `
                }
              });
        }
      });
  };

  const specificProduct = useLoaderData();
  const { product_name, product_image, _id } = specificProduct;

  return (
    <div>
      <div className="">
        <div className="pt-10 ">
          <h1 className="text-center py-10 font-bold text-3xl">
            Add Reviews for: {product_name}
          </h1>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">product Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  defaultValue={product_name}
                  placeholder="Name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">User Name</span>
                </label>
                <input
                  type="text"
                  name="userName"
                  defaultValue={user?.displayName}
                  placeholder="Name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">User Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  defaultValue={user?.email}
                  placeholder="User email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">User photo</span>
                </label>
                <input
                  type="text"
                  name="userPhoto"
                  defaultValue={user?.photoURL}
                  placeholder="User Photo"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Product Photo</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  defaultValue={product_image}
                  placeholder="Product Photo"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Personal Ratings</span>
                </label>
                <input
                  type="text"
                  name="ratings"
                
                  placeholder="Personal Ratings"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control md:col-span-2">
                <label className="label ">
                  <span className="label-text">Add Review</span>
                  
                </label>
                <input
                  type="text"
                  name="review"
                  placeholder="Review"
                  className="input input-bordered max-w-full"
                />
              </div>
            </div>
            <div className="form-control mt-6">
              <input
                className="btn btn-error btn-block"
                type="submit"
                value="Submit"
              />
            </div>
          </form>

          <div className="card-body"></div>
        </div>
      </div>
    </div>
  );
};

export default AddReviews;
