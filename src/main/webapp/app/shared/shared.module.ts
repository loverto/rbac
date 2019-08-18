import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RbacSharedLibsModule, RbacSharedCommonModule, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [RbacSharedLibsModule, RbacSharedCommonModule],
  declarations: [HasAnyAuthorityDirective],
  exports: [RbacSharedCommonModule, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RbacSharedModule {
  static forRoot() {
    return {
      ngModule: RbacSharedModule
    };
  }
}
