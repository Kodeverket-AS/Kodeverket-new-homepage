import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function BasicCard() {
    return (
        <>
            {/* Toppseksjon */}
            <div className='text-center text-2xl font-bold py-12 my-12 xl:text-xl'>
                <h2> Hva gjør vi? </h2>
            </div>

            {/* Kortseksjon */}
            <div className='flex flex-wrap justify-center gap-6 mb-12'>
                {/* Logo-kort */}
                <Card
                    className='flex justify-center items-center'
                    sx={{ minWidth: 275, maxWidth: 300 }}
                >
                    <CardContent className='flex flex-col items-center'>
                        <img
                            src='/logoVertical.png'
                            alt='Kodeverket Bergen logo'
                            className='w-32 h-auto mb-4'
                        />
                        <Typography
                            className='text-center text-lg font-semibold'
                            sx={{ color: "text.secondary" }}
                        >
                            Kodeverket Bergen
                        </Typography>
                    </CardContent>
                </Card>

                {/* UI/UX Design-kort */}
                <Card
                    className='shadow-lg hover:shadow-xl transition-shadow'
                    sx={{ minWidth: 275, maxWidth: 300 }}
                >
                    <CardContent className='flex flex-col items-center text-center'>
                        <div className='w-16 h-16 bg-sky-600 text-white flex items-center justify-center rounded-full mb-4'>
                            {/* UX Icon */}
                            <svg
                                width='50%'
                                height='50%'
                                viewBox='0 0 24 24'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path
                                    d='M12 1.5H8.5C6.567 1.5 5 3.067 5 5C5 6.933 6.567 8.5 8.5 8.5M12 1.5V8.5M12 1.5H15.5C17.433 1.5 19 3.067 19 5C19 6.933 17.433 8.5 15.5 8.5M12 8.5H8.5M12 8.5V15.5M12 8.5H15.5M8.5 8.5C6.567 8.5 5 10.067 5 12C5 13.933 6.567 15.5 8.5 15.5M12 15.5H8.5M12 15.5V19C12 20.933 10.433 22.5 8.5 22.5C6.567 22.5 5 20.933 5 19C5 17.067 6.567 15.5 8.5 15.5M15.5 8.5C17.433 8.5 19 10.067 19 12C19 13.933 17.433 15.5 15.5 15.5C13.567 15.5 12 13.933 12 12C12 10.067 13.567 8.5 15.5 8.5Z'
                                    stroke='currentColor'
                                    stroke-width='2'
                                    stroke-linecap='round'
                                    stroke-linejoin='round'
                                />
                            </svg>
                        </div>
                        <Typography
                            sx={{
                                color: "text.secondary",
                                fontSize: 14,
                                mb: 1.5,
                            }}
                        >
                            01 - UI/UX Design
                        </Typography>
                        <Typography variant='body2'>
                            Vi skaper moderne, estetisk tiltalende
                            designløsninger som gir en unik og engasjerende
                            brukeropplevelse.
                        </Typography>
                    </CardContent>
                </Card>

                {/* Front-end-kort */}
                <Card
                    className='shadow-lg hover:shadow-xl transition-shadow'
                    sx={{ minWidth: 275, maxWidth: 300 }}
                >
                    <CardContent className='flex flex-col items-center text-center'>
                        <div className='w-16 h-16 bg-sky-600 text-white flex items-center justify-center rounded-full mb-4'>
                            {/* Front-End Icon */}
                            <svg
                                width='50%'
                                height='50%'
                                viewBox='0 0 24 24'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path
                                    d='M18.5708 20C19.8328 20 20.8568 18.977 20.8568 17.714V13.143L21.9998 12L20.8568 10.857V6.286C20.8568 5.023 19.8338 4 18.5708 4M5.429 4C4.166 4 3.143 5.023 3.143 6.286V10.857L2 12L3.143 13.143V17.714C3.143 18.977 4.166 20 5.429 20'
                                    stroke='currentColor'
                                    stroke-width='2'
                                    stroke-linecap='round'
                                    stroke-linejoin='round'
                                />
                            </svg>
                        </div>
                        <Typography
                            sx={{
                                color: "text.secondary",
                                fontSize: 14,
                                mb: 1.5,
                            }}
                        >
                            02 - Front-end
                        </Typography>
                        <Typography variant='body2'>
                            Vårt team utvikler intuitive, raske og responsive
                            grensesnitt som oppfyller de høyeste standardene.
                        </Typography>
                    </CardContent>
                </Card>

                {/* Back-end-kort */}
                <Card
                    className='shadow-lg hover:shadow-xl transition-shadow'
                    sx={{ minWidth: 275, maxWidth: 300 }}
                >
                    <CardContent className='flex flex-col items-center text-center'>
                        <div className='w-16 h-16 bg-sky-600 text-white flex items-center justify-center rounded-full mb-4'>
                            {/* Back-End Icon */}
                            <svg
                                width='50%'
                                height='50%'
                                viewBox='0 0 24 24'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path
                                    d='M4 18V17.8C4 16.1198 4 15.2798 4.32698 14.638C4.6146 14.0735 5.07354 13.6146 5.63803 13.327C6.27976 13 7.11984 13 8.8 13H15.2C16.8802 13 17.7202 13 18.362 13.327C18.9265 13.6146 19.3854 14.0735 19.673 14.638C20 15.2798 20 16.1198 20 17.8V18M4 18C2.89543 18 2 18.8954 2 20C2 21.1046 2.89543 22 4 22C5.10457 22 6 21.1046 6 20C6 18.8954 5.10457 18 4 18ZM20 18C18.8954 18 18 18.8954 18 20C18 21.1046 18.8954 22 20 22C21.1046 22 22 21.1046 22 20C22 18.8954 21.1046 18 20 18ZM12 18C10.8954 18 10 18.8954 10 20C10 21.1046 10.8954 22 12 22C13.1046 22 14 21.1046 14 20C14 18.8954 13.1046 18 12 18ZM12 18V8M6 8H18C18.9319 8 19.3978 8 19.7654 7.84776C20.2554 7.64477 20.6448 7.25542 20.8478 6.76537C21 6.39782 21 5.93188 21 5C21 4.06812 21 3.60218 20.8478 3.23463C20.6448 2.74458 20.2554 2.35523 19.7654 2.15224C19.3978 2 18.9319 2 18 2H6C5.06812 2 4.60218 2 4.23463 2.15224C3.74458 2.35523 3.35523 2.74458 3.15224 3.23463C3 3.60218 3 4.06812 3 5C3 5.93188 3 6.39782 3.15224 6.76537C3.35523 7.25542 3.74458 7.64477 4.23463 7.84776C4.60218 8 5.06812 8 6 8Z'
                                    stroke='currentColor'
                                    stroke-width='2'
                                    stroke-linecap='round'
                                    stroke-linejoin='round'
                                />
                            </svg>
                        </div>
                        <Typography
                            sx={{
                                color: "text.secondary",
                                fontSize: 14,
                                mb: 1.5,
                            }}
                        >
                            03 - Back-end
                        </Typography>
                        <Typography variant='body2'>
                            Vi bygger robuste og skalerbare backend-systemer som
                            sikrer trygg og stabil drift.
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </>
    );
}
