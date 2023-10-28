import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const BookService = () => {
    const service = useLoaderData()
    const { title, _id, price, img } = service;
    const { user } = useContext(AuthContext)
    const handleBookService = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const booking = {
            customerName: name,
            email: email,
            img,
            date,
            service: title,
            service_id: _id,
            price: price
        }
        console.log(booking);

        fetch('http://localhost:9000/bookings',{
        method : 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(booking)
     })
     .then(r=> r.json())
     .then(data=> {
        console.log(data);
        if(data.insertedId){
            alert('service booked sucessfully')
        }
     })


    }
     


    return (
        <div>
            <div>
                <h2 className="text-3xl text-center">Book Service: {title}</h2>

                <form onSubmit={handleBookService} className="card-body">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" defaultValue={user?.displayName
                            } className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <input type="date" name="date" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" defaultValue={user?.email} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Due amount</span>
                            </label>
                            <input type="number" name="dueAmount" defaultValue={price} className="input input-bordered" required />

                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <button type="submit" className="btn bg-red-600 text-white">Order Confirm</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BookService;