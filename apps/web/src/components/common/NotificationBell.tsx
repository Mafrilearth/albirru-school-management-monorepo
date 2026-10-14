"use client";

import { Bell, Check, ExternalLink, Sparkles } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useLanguage } from "@/lib/i18n/context";

export interface SchoolNotification {
  id: string;
  title: string;
  summary: string;
  category: "PPDB" | "Tahfidz" | "Akademik" | "Prestasi";
  date: string;
  href?: string;
  read: boolean;
}

const DEFAULT_NOTIFICATIONS: SchoolNotification[] = [
  {
    id: "notif-ppdb-1",
    title: "PPDB 2026/2027 Gelombang I Telah Dibuka",
    summary:
      "Pendaftaran calon santri baru dibuka dengan kuota terbatas (tersisa 14 kursi). Rasio santri 1:15.",
    category: "PPDB",
    date: "Hari ini",
    href: "/admissions",
    read: false,
  },
  {
    id: "notif-tahfidz-1",
    title: "Jadwal Ujian Tasmi' Akbar 3 Juz Mutqin",
    summary:
      "Pelaksanaan ujian tasmi' santri kelas 6 talaqqi bersanad riwayat Hafs 'an 'Ashim dijadwalkan akhir bulan.",
    category: "Tahfidz",
    date: "Kemarin",
    href: "/programs",
    read: false,
  },
  {
    id: "notif-akademik-1",
    title: "Eksplorasi Alam & Sains Nabawiyyah",
    summary:
      "Pembelajaran luar ruang pengamatan ekosistem dan fitrah alam bagi santri jenjang bawah.",
    category: "Akademik",
    date: "3 hari lalu",
    href: "/news",
    read: false,
  },
  {
    id: "notif-prestasi-1",
    title: "Juara 1 Musabaqah Hifdzil Qur'an Sukabumi",
    summary:
      "Santri SD Al-Birru meraih prestasi membanggakan pada ajang hifdzil Qur'an tingkat Kabupaten.",
    category: "Prestasi",
    date: "1 pekan lalu",
    href: "/news",
    read: true,
  },
];

const STORAGE_KEY = "albirru_read_notifications";

export function NotificationBell() {
  const { t } = useLanguage();
  const [notifications, setNotifications] = useState<SchoolNotification[]>(
    DEFAULT_NOTIFICATIONS,
  );
  const [isOpen, setIsOpen] = useState(false);

  // Sync read status from storage
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const readIds: string[] = JSON.parse(stored);
        setNotifications((prev) =>
          prev.map((n) => ({ ...n, read: n.read || readIds.includes(n.id) })),
        );
      }
    } catch {
      // Safe fallback
    }
  }, []);

  const unreadCount = notifications.filter((n) => !n.read).length;

  const markAllAsRead = () => {
    const allIds = notifications.map((n) => n.id);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(allIds));
    } catch {
      // Ignore storage error
    }
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  const markItemAsRead = (id: string) => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      const readIds: string[] = stored ? JSON.parse(stored) : [];
      if (!readIds.includes(id)) {
        readIds.push(id);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(readIds));
      }
    } catch {
      // Ignore storage error
    }
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n)),
    );
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger
        render={
          <Button
            variant="ghost"
            size="icon"
            aria-label={`${t.notifications.title} (${unreadCount} belum dibaca)`}
            className="relative size-9 rounded-none border border-border/40 hover:bg-muted"
          />
        }
      >
        <Bell className="size-4 text-foreground" />
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 flex h-4 min-w-4 items-center justify-center bg-primary px-1 font-mono text-[10px] font-bold text-primary-foreground">
            {unreadCount}
          </span>
        )}
      </PopoverTrigger>

      <PopoverContent
        align="end"
        sideOffset={6}
        className="w-[320px] sm:w-[380px] p-0 rounded-none border border-border bg-popover text-popover-foreground shadow-none"
      >
        <PopoverHeader className="flex flex-row items-center justify-between border-b border-border p-3">
          <div className="flex items-center gap-1.5">
            <Sparkles className="size-3.5 text-primary" />
            <PopoverTitle className="font-semibold text-xs tracking-tight">
              {t.notifications.title}
            </PopoverTitle>
            {unreadCount > 0 && (
              <Badge
                variant="secondary"
                className="h-4 px-1.5 text-[9px] font-mono rounded-none bg-primary/10 text-primary border-none"
              >
                {unreadCount} {t.notifications.newBadge}
              </Badge>
            )}
          </div>
          {unreadCount > 0 && (
            <button
              onClick={markAllAsRead}
              className="flex items-center gap-1 text-[11px] font-medium text-muted-foreground hover:text-foreground cursor-pointer transition-colors"
            >
              <Check className="size-3" />
              <span>{t.notifications.markAllAsRead}</span>
            </button>
          )}
        </PopoverHeader>

        <div className="max-h-[380px] overflow-y-auto divide-y divide-border">
          {notifications.length === 0 ? (
            <div className="p-6 text-center text-xs text-muted-foreground">
              {t.notifications.empty}
            </div>
          ) : (
            notifications.map((item) => (
              <div
                key={item.id}
                onClick={() => markItemAsRead(item.id)}
                className={`p-3 transition-colors ${
                  item.read
                    ? "bg-popover opacity-80 hover:bg-muted/40"
                    : "bg-primary/5 hover:bg-primary/10"
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-1.5">
                    <Badge
                      variant="outline"
                      className="h-4 px-1 text-[9px] font-mono uppercase rounded-none border-border"
                    >
                      {item.category}
                    </Badge>
                    <span className="text-[10px] font-mono text-muted-foreground">
                      {item.date}
                    </span>
                  </div>
                  {!item.read && (
                    <span
                      role="status"
                      aria-label="Belum dibaca"
                      className="size-1.5 rounded-full bg-primary shrink-0 mt-1"
                    />
                  )}
                </div>

                <h4 className="mt-1 text-xs font-semibold text-foreground leading-snug">
                  {item.title}
                </h4>
                <p className="mt-1 text-[11px] text-muted-foreground leading-relaxed line-clamp-2">
                  {item.summary}
                </p>

                {item.href && (
                  <div className="mt-2 flex items-center">
                    <Link
                      href={item.href}
                      onClick={() => {
                        markItemAsRead(item.id);
                        setIsOpen(false);
                      }}
                      className="inline-flex items-center gap-1 text-[10px] font-semibold text-primary hover:underline"
                    >
                      <span>Lihat Rincian</span>
                      <ExternalLink className="size-2.5" />
                    </Link>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
}
