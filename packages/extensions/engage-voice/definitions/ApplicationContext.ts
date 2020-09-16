import {
  AutowireCapableBeanFactory,
  ClassLoader,
  Environment,
  BeanFactory,
} from './index';

class ApplicationContext {
  applicationName?: string;

  autowireCapableBeanFactory?: AutowireCapableBeanFactory;

  beanDefinitionCount?: number;

  beanDefinitionNames?: string[];

  classLoader?: ClassLoader;

  displayName?: string;

  environment?: Environment;

  id?: string;

  parent?: ApplicationContext;

  parentBeanFactory?: BeanFactory;

  startupDate?: number;
}

export default ApplicationContext;
