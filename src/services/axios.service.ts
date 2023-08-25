import axios from 'axios';
import {baseURL} from "../constants";

const axiosPlaceholderService = axios.create({baseURL});

export {axiosPlaceholderService};
