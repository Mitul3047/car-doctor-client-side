import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Bookings = () => {
    const { user } = useContext(AuthContext);
    const [booking, setBookings] = useState([])
    const url = `http://localhost:9000/bookings?email=${user?.email}&sort=1`

    useEffect(() => {
        fetch(url)
        .then(r=>r.json())
        .then(data => console.log(data))

    }, [])

    return (
        <div>

        </div>
    );
};

export default Bookings;