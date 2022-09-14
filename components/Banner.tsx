import { Box } from "@mui/material";
import Image from "next/image";
import banner1 from 'public/Pics/banner1.jpg';

const Banner = () => {
    return (
        <Box sx={{ width: '100%', height: '480px'}}>
            <Image alt='banner' src={banner1} layout='responsive' height={800}/>
        </Box>
    )
}

export default Banner;