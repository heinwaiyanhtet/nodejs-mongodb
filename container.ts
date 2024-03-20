require('reflect-metadata');

import { Container } from 'inversify';

import BlogRepository from './repositories/blogRepository';
import BlogService from './services/blogService';

const container = new Container();

container.bind('BlogRepository').to(BlogRepository);
container.bind('BlogService').to(BlogService);

export default container;
