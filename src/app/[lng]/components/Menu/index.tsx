import styles from './menu.module.scss';
import { useTranslation } from '../../../i18n/index'
import Link from "next/link";

export default async function Menu({ lang }: { lang: string }) {
    const { t } = await useTranslation(lang, 'menu')

    return (
        <nav className={styles.nav}>           
            <ul className={styles.menu}>
                <li>
                    <Link  href={`/${lang}`}>{t('home')}</Link>
                </li>
                <li>
                    <Link href={`/${lang}/service/queue`} >{t('myqueue')}</Link>
                </li>
                <li>
                    <Link href={`/${lang}/service`}>{t('service.index')}</Link>
                    <ul>
                        <li><Link href={`/${lang}/service/request`}>{t('service.request')}</Link></li>
                        <li><Link href={`/${lang}/service/problem`}>{t('service.problem')}</Link></li>
                        <li><Link href={`/${lang}/service/activity`}>{t('service.activity')}</Link></li>
                        <li><Link href={`/${lang}/service/schedule`}>{t('service.schedule')}</Link></li>
                    </ul>
                </li>
                <li>
                    <a href="/workflow">{t('workflow.index')}</a>
                    <ul>
                        <li><a href="/workflow/requests">{t('workflow.request')}</a></li>
                        <li><a href="/workflow/problems">{t('workflow.problem')}</a></li>
                        <li><a href="/workflow/activity">{t('workflow.activity')}</a></li>
                        <li><a href="/workflow/schedule">{t('workflow.schedule')}</a></li>
                    </ul>
                </li>
                <li>
                    <a href="report">{t('report.index')}</a>
                    <ul>
                        <li><a href="/report/request">{t('report.request')}</a></li>
                        <li><a href="/report/servicelevel">{t('report.servicelevel')}</a></li>
                        <li><a href="/report/invetory">{t('report.invetory')}</a></li>
                        <li><a href="/report/audit">{t('report.audit')}</a></li>
                    </ul>
                </li>
                <li>
                    <a href="/configuration">{t('configuration.index')}</a>
                    <ul>
                        <li>
                            <a href="/configuration/client">{t('configuration.client.index')}</a>
                            <ul>
                                <li><a href="/configuration/client/having">{t('configuration.client.having')}</a></li>
                                <li><a href="/configuration/client/having/license">{t('configuration.client.license')}</a></li>
                                <li><a href="/configuration/client/contract">{t('configuration.client.contract')}</a></li>
                                <li><a href="/configuration/client/sectional">{t('configuration.client.sectional')}</a></li>
                                <li><a href="/configuration/client/sla">{t('configuration.client.sla')}</a></li>                             
                            </ul>
                        </li>
                        <li>
                            <a href="/configuration/calendar">{t('configuration.calendar.index')}</a>
                            <ul>
                                <li><a href="configuration/calendar/holiday">{t('configuration.calendar.holiday')}</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="/configuration/accessmanager">{t('configuration.accessmanager.index')}</a>
                            <ul>
                                <li><a href="/configuration/accessmanager/user">{t('configuration.accessmanager.user')}</a></li>
                                <li><a href="/configuration/accessmanager/group">{t('configuration.accessmanager.group')}</a></li>
                                <li><a href="/configuration/accessmanager/role">{t('configuration.accessmanager.role')}</a></li>
                                <li><a href="/configuration/accessmanager/permission">{t('configuration.accessmanager.permission')}</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="/configuration/general">{t('configuration.general.index')}</a>
                            <ul>
                                <li><a href="/configuration/havingstype">{t('configuration.general.havingstype')}</a></li>
                                <li><a href="/configuration/requeststype">{t('configuration.general.requeststype')}</a></li>
                                <li><a href="/configuration/requestsstatus">{t('configuration.general.requestsstatus')}</a></li>
                                <li><a href="/configuration/priority">{t('configuration.general.priority')}</a></li>
                                <li><a href="/configuration/urgency">{t('configuration.general.urgency')}</a></li>
                                <li><a href="/configuration/channel">{t('configuration.general.channel')}</a></li>
                                <li><a href="/configuration/class">{t('configuration.general.class')}</a></li>                               
                                <li><a href="/configuration/category">{t('configuration.general.category')}</a></li>
                            </ul>                                                    
                        </li>                        
                    </ul>
                </li> 
                <li>
                    <a href="/configuration/user">{t('user.index')}</a>
                    <ul>
                        <li><a href="/configuration/user/profile">{t('user.profile')}</a></li>
                        <li><a href="/configuration/user/changePassword">{t('user.changePassword')}</a></li>
                        <li><a href="/configuration/user/logout">{t('user.logout')}</a></li>
                    </ul>
                </li>

            </ul>
        </nav>
    );
}