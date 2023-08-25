import {axiosPlaceholderService} from './axios.service';
import {urls} from '../constants/urls';
import {IPost, IRes, ITodo} from '../interfaces';

const placeholderService = {
  getPosts: (): IRes<IPost[]> => axiosPlaceholderService.get(`${urls.posts}`),
  getTodos: (): IRes<ITodo[]> => axiosPlaceholderService.get(`${urls.todos}`),
};

export default placeholderService;
