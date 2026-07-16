import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { NavItem } from '../../../core/models/nav-item.model';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, MatIconModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss'
})
export class Sidebar {
  navItems: NavItem[] = [
    { label: 'Dashboard', icon: 'space_dashboard', route: '/dashboard' },
    { label: 'Journeys', icon: 'map', route: '/journeys' },
    { label: 'Automations', icon: 'bolt', route: '/automations' },
    { label: 'Tasks', icon: 'checklist', route: '/tasks' },
    { label: 'Approvals', icon: 'verified', route: '/approvals' },
    { label: 'Analytics', icon: 'bar_chart', route: '/analytics' },
    { label: 'AI Copilot', icon: 'auto_awesome', route: '/ai-copilot' },
    { label: 'Integrations', icon: 'hub', route: '/integrations' },
    { label: 'Notifications', icon: 'notifications', route: '/notifications', badge: 6 },
    { label: 'Settings', icon: 'settings', route: '/settings' },
  ];
}