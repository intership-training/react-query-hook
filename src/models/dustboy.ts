export type DustboyStation = {
   dustboy_id: number
   dustboy_name_th: string
   dustboy_name_en: string
   dustboy_lat: string
   dustboy_lng: string
   dustboy_status: "string"

  };
  
export type StationValue = {
    id: number
    dustboy_name: string
    us_color: string
    pm10_us_aqi: number
    pm25_us_aqi: number
    us_title: string
    us_title_en: string
    us_caption: string
    us_caption_en: string
    daily_temp: string
    daily_humid: string
    log_datetime: string
    daily_th_caption_en: string
  };
  